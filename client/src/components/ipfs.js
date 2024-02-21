const deleteFromPinata = async (pinataSecretApiKey, cid) => {
      try {
        // Call Pinata API to remove the pin
        const deleteResponse = await axios.delete(
         ` https://api.pinata.cloud/pinning/unpin/${cid}`,
          {
            headers: {
              Authorization: `Bearer ${pinataSecretApiKey}`,
            },
          }
        );

        console.log('Pinata API Delete Response:', deleteResponse.data);
      } catch (error) {
        // Log error (do not throw or handle errors as per your request)
        console.error('Error deleting from Pinata:', error.message);
        if (error.response) {
          console.error('Delete API Response:', error.response.data);
        }
      }
    };