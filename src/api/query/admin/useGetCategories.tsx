import { getTrendHiveOpenApi } from "@/api/trendhive/api";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    return useQuery({
      queryKey: ['categories'], // Unique key for caching
      queryFn: async () => {
        try {
          const api = await getTrendHiveOpenApi();
          // Assuming there's a method to get all categories
          const response = await api.trendHive.categories.categoriesControllerFindAll()
          return response; // Adjust based on your API response structure
        } catch (error: any) {
          throw new Error(error.message || 'Fetching categories failed');
        }
      }
    });
}