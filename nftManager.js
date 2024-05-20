// Initialize an empty array to store NFTs
let nftCollection = [];

// Function to mint a new NFT
function mintNFT(name, creator, description) {
    const nft = {
        name: name,
        creator: creator,
        description: description,
        timestamp: new Date().toISOString()
    };
    // Add the new NFT to the collection
    nftCollection.push(nft);
}

// Function to list all NFTs in the collection
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log('NFT ${index + 1}:');
        console.log('  Name: ${nft.name}');
        console.log('  Creator: ${nft.creator}');
        console.log('  Description: ${nft.description}');
        console.log('  Timestamp: ${nft.timestamp}');
    });
}

// Function to get the total number of NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Mint two NFTs
mintNFT("Art Piece 1", "Artist A", "A beautiful piece of digital art.");
mintNFT("Art Piece 2", "Artist B", "A stunning representation of modern art.");

// List all NFTs
listNFTs(); 

// Print the total number of NFTs
console.log('Total NFTs minted: ${getTotalSupply()}');
