/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-process-exit */
const main = async () => {
  // eslint-disable-next-line no-undef
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to: ", waveContract.address);

  let waveCount;
  let message;

  let waveTxn = await waveContract.wave("The first wave!");
  await waveTxn.wait();

  const [_, randomPerson] = await hre.ethers.getSigners();
  // eslint-disable-next-line prefer-const
  waveCount = await waveContract.getTotalWaves();
  for (let i = 0; i < 5; i++) {
    message = "Wave Looper #" + i;
    waveTxn = await waveContract.connect(randomPerson).wave(message);
    await waveTxn.wait();
  }
  const allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
