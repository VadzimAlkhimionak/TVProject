import {gql, useQuery} from "@apollo/client";

export interface Video {
    id: string;
    title: string;
    preview: string;
}

interface ContentsData {
    contents: {
        nodes: Video[];
    };
}

const GET_VIDEOS = gql`
    query Videos {
        contents {
            nodes {
                id
                title
                preview
            }
        }
    }
`;

export const useVideos = () => {
    const { loading, error, data } = useQuery<ContentsData>(GET_VIDEOS);
    
    return {
        loading,
        error,
        data
    }
}
