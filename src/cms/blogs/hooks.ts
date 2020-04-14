import { useToast } from "@chakra-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogInterface } from "src/interfaces/Blog";

export function useBlogUpdate() {
  const [isUpdated, setUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const toast = useToast();
  const showSuccessToast = () => {
    toast({
      title: "Success",
      description: "Blog was updated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const showErrorToast = () => {
    toast({
      title: "Failed",
      description: "Error while updating blog",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  useEffect(() => {
    if (isUpdated) {
      console.log("Update effect", isSuccess, isError);
      if (isSuccess) {
        // showSuccessToast();
        setIsSuccess(false);
      }
      if (isError) {
        // showErrorToast();
        setIsError(false);
      }
      setUpdate(false);
    }
  }, [isUpdated]);
  const handleUpdate = (id: string, payload: BlogInterface) => {
    axios
      .put(`/api/cms/blogs/${id}`, payload)
      .then(() => {
        setIsSuccess(true);
        setUpdate(true);
      })
      .catch(() => {
        setIsError(true);
        setUpdate(true);
      });
  };
  return {
    handleUpdate,
    showSuccessToast,
    showErrorToast,
    updated: isUpdated,
    error: isError,
    success: isSuccess,
  };
}
