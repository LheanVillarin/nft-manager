My name is Lhean Ruzzele N. Villarin, and I am a student at National Teachers College. In our recent project, we developed a simple script to manage a collection of NFTs (Non-Fungible Tokens). This script includes functions to mint new NFTs, list all existing NFTs, and retrieve the total number of NFTs created.

We begin by declaring a variable named nftCollection as an empty array. This array will serve as a storage container for all the NFTs we create. To mint an NFT, we use the mintNFT function, which takes three parameters: name, creator, and description. Within this function, an object representing the NFT is constructed. This object includes the provided metadata (name, creator, and description) along with a timestamp indicating the moment of creation. The newly minted NFT is then added to the nftCollection array.

Next, we implement the listNFTs function. This function iterates through each NFT in the nftCollection array and prints its metadata to the console. The metadata includes the NFT's name, creator, description, and timestamp. This allows us to easily review all the NFTs in our collection.

To keep track of the total number of NFTs, we have the getTotalSupply function, which returns the length of the nftCollection array. This gives us the total count of NFTs minted so far.

Finally, in the example usage, we call the mintNFT function twice to create two distinct NFTs. We then use the listNFTs function to display all NFTs in the console, followed by calling getTotalSupply to print the total number of NFTs created.

This project provides a basic yet functional approach to managing NFTs, showcasing fundamental programming skills in JavaScript.
