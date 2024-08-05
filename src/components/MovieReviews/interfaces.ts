interface Author {
   name: string;
   username: string;
   avatar: string;
   rating: string;
}

interface Review {
   author: string;
   author_details: Author;
   content: string;
   created_at: string;
   id: string;
   updated_at: string;
   url: string;
}

export interface MovieReviews {
   id: number;
   page: number;
   results: Review[];
   total_pages: number;
   total_results: number;
}

export interface MovieReviewsProps {
   movieReviews: MovieReviews;
}
