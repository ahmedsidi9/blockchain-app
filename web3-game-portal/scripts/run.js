const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const gameContractFactory = await hre.ethers.getContractFactory("GamePortal");
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.adress);
    console.log("Contract deployed by:", owner.address);
    let numberOfGoals;
    numberOfGoals = await gameContract.getTotalGoals();
    let score = await gameContract.score();
    await score.wait();
    numberOfGoals = await gameContract.getTotalGoals();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();