const { expect } = require("chai");

describe("TestOracle", function () {
  async function deployContractsFixture() {
    // deploy mock oracle
    const MockOracle = await ethers.getContractFactory("MockV3Aggregator");
    const mockOracle = await MockOracle.deploy("18", "1000");
    const PriceConsumer = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumer = await PriceConsumer.deploy(mockOracle.address);

    return mockOracle, priceConsumer;
  }

  it("get oracle initial answer", async function () {
    const { mockOracle, priceConsumer } = await deployContractsFixture();
    const answer = await priceConsumer.getLatestPrice();
    console.log(answer);
  });
});
