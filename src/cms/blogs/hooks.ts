import { useToast } from "@chakra-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogInterface } from "src/interfaces/Blog";
import _ from "lodash";

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

export function useBlogsFilter(data, filters) {
  // filter by title
  // filter by status
  const [filteredBlogs, setState] = useState(data);
  useEffect(() => {
    filterBlogs();
  }, [data, filters]);

  const filterBlogs = () => {
    let blogsByStatus = [];
    let blogsBySearch = [];
    const searchFilter = filters.search.trim();
    if (filters.status && filters.status !== "all") {
      blogsByStatus = _.filter(data, ({ status }) => status === filters.status);
    } else {
      blogsByStatus = data;
    }
    if (searchFilter && String(searchFilter).length > 0) {
      const tagsMatch = _.filter(
        data,
        ({ tags }) =>
          _.intersection(tags, searchFilter.toLowerCase().split(" ")).length > 0
      );
      const titleMatch = _.filter(
        data,
        ({ title }) =>
          title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          searchFilter.toLowerCase().includes(title.toLowerCase())
      );
      if (tagsMatch.length > 0 && titleMatch.length > 0) {
        blogsBySearch = _.intersection(tagsMatch, titleMatch);
      } else {
        blogsBySearch = tagsMatch.concat(titleMatch);
      }
    } else {
      blogsBySearch = data;
    }
    setState(_.intersection(blogsBySearch, blogsByStatus));
  };
  return { filteredBlogs };
}
