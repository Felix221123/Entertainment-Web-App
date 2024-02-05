import { ReactNode, createContext, useContext, useState , useEffect } from "react";
// import { MovieData } from "./BOOKMARKED";
import { MovieRecommeded } from "../MOVIES/MOVIES";
// import DATA from "../../data.json"

interface BookmarkContextProps {
    bookmarkedMovies: MovieRecommeded[];
    toggleBookmark: (movie: MovieRecommeded) => void;
}

interface childProps {
    children: ReactNode;
}

const BookmarkContext = createContext<BookmarkContextProps | undefined>(
    undefined
);

export const useBookmarkContext = () => {
    const context = useContext(BookmarkContext);
    if (!context) {
        throw new Error(
        "useBookmarkContext must be used within a BookmarkProvider"
        );
    }
    return context;
};

export const BookmarkProvider = ({ children }: childProps) => {
    const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieRecommeded[]>([]);

    const toggleBookmark = (movie: MovieRecommeded) => {
        setBookmarkedMovies((prevBookmarkedMovies) => {
            const isMovieBookmarked = prevBookmarkedMovies.some(
                (m) => m.title === movie.title && m.isBookmarked === true
            );
    
            if (isMovieBookmarked) {
                console.log("Removing bookmark for:", movie.title);
            // If the movie is already bookmarked, remove it
                return prevBookmarkedMovies.filter((m) => m.title !== movie.title);
            }
            else {
                console.log("Adding bookmark for:", movie.title);
                // If the movie is not bookmarked, add it
                    return [...prevBookmarkedMovies,
                        {
                            ...movie,
                            isBookmarked: true,
                        }
                    ];
                }
        });
    };

    useEffect(() => {
      // Fetch JSON data
        fetch("./src/data.json")
        .then((response) => response.json())
        .then((data) => setBookmarkedMovies(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []); // Empty dependency array ensures the effect runs only once

    console.log(bookmarkedMovies);
    
    return (
        <BookmarkContext.Provider value={{ bookmarkedMovies, toggleBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
};
