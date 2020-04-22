import { useToast } from "@chakra-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogInterface } from "src/interfaces/Blog";
import _ from "lodash";

export function useBlogUpdate() {
  const handleUpdate = async (id: string, payload: BlogInterface) => {
    const result = await axios.put(`/api/cms/blogs/${id}`, payload);
    return result;
  };
  return {
    handleUpdate
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
