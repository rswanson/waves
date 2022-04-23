/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-process-exit */
const main = async () => {
  // eslint-disable-next-line no-undef
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();

  console.log("Contract deployed to: ", waveContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let waveCount;
  let message;

  let waveTxn = await waveContract.wave("The first wave!");
  await waveTxn.wait();
  waveTxn = await waveContract.wave("The first wave!");
  await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

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
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
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
