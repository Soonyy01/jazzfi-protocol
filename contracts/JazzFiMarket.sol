// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title JazzFiMarket
 * @notice Kontrak pintar untuk Onchain Tax Lien Markets di Robinhood Chain Testnet.
 * @dev Mengelola pencatatan aset tax lien, sistem bidding, dan likuiditas borrow/lend.
 */
contract JazzFiMarket {
    struct TaxLienAsset {
        uint256 id;
        string propertyName;
        uint256 lienAmount;
        uint256 apr;
        bool active;
    }

    mapping(uint256 => TaxLienAsset) public assets;
    mapping(address => uint256) public userSuppliedLiquidity;
    uint256 public assetCount;

    event AssetListed(uint256 indexed id, string propertyName, uint256 lienAmount, uint256 apr);
    event BidPlaced(uint256 indexed assetId, address indexed bidder, uint256 amount);
    event LiquiditySupplied(address indexed lender, uint256 amount);

    constructor() {
        _listAsset("Commercial Plaza Lien #402", 50000 * 10**18, 1450);
        _listAsset("Residential Estate Lien #88", 22000 * 10**18, 1280);
        _listAsset("Industrial Warehouse Lien #9", 110000 * 10**18, 1620);
    }

    function _listAsset(string memory name, uint256 amount, uint256 apr) internal {
        assetCount++;
        assets[assetCount] = TaxLienAsset(assetCount, name, amount, apr, true);
        emit AssetListed(assetCount, name, amount, apr);
    }

    function placeBid(uint256 assetId) external payable {
        require(assets[assetId].active, "Asset is not active for bidding");
        require(msg.value > 0, "Bid amount must be greater than zero");
        emit BidPlaced(assetId, msg.sender, msg.value);
    }

    function supplyLiquidity() external payable {
        require(msg.value > 0, "Must supply positive amount");
        userSuppliedLiquidity[msg.sender] += msg.value;
        emit LiquiditySupplied(msg.sender, msg.value);
    }
}