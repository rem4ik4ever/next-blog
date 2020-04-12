import axios from "axios";

export const uploadToS3 = async (file, signedRequest) => {
  var options = {
    headers: {
      "Content-Type": file.type,
    },
  };
  return await axios.put(signedRequest, file, options);
};
