interface Author {
   name: string;
   username: string;
   avatar: string;
   rating: string;
}

export interface MovieBarChartProps {
   author: string;
   author_details: Author;
   content: string;
   created_at: string;
   id: string;
   updated_at: string;
   url: string;
}
