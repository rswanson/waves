/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-process-exit */
const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  // eslint-disable-next-line no-undef
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  for (let i = 0; i < 10; i++) {
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
    waveCount = await waveContract.getTotalWaves();
  }
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
