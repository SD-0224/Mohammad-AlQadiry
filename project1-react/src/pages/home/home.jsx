import { useEffect, useState } from "react";
import { getTopics } from "../../features/topics/services/topics.service";
import { SingleTopic } from "../../features/topics/components/single-topic/single-topic";

export function Home() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics()
            .then(data => {
                setTopics(data);

            })
            .catch(error => {
                console.error("Error in fetching topics :", error);

            });
    }, []);


    return (
        <>

        </>
    )
}