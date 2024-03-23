import { useEffect, useState } from "react";
import { getTopics } from "../../features/topics/services/topics.service";
import { SingleTopic } from "../../features/topics/components/single-topic/single-topic";
import styles from "./home.module.css"; // Adjusted import here
import { WelcomeBlock } from "../../shared/components/welcome-block/welcome-block";
import { LoadingSpinner } from "../../shared/components/loading-spinner/loading-spinner";
import { useDebounce } from "../../shared/helpers/hooks/debounce";

export function Home() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [selectedSort, setSelectedSort] = useState('title');


    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then(data => {
                setTopics(data);
                setIsLoading(false);
                sortTopics(topics);
            })
            .catch(error => {
                console.error("Error in fetching topics:", error);
            });
    }, []);

    const getCategories = (topics) => {
        const categories = new Set(topics.map(topic => topic.category));
        return [...categories];

    }


    const getSortOptions = () => {
        return ['title', 'author'];
    }


    const onSortChange = (e) => {
        setSelectedSort(e.target.value);
        sortTopics(topics);
    }



    const onSearchChange = (e) => {
        const searchPhrase = e.target.value;
        setSearchPhrase(searchPhrase);
        debounceOnSearchChange(searchPhrase);

    }

    const debounceOnSearchChange = useDebounce((searchPhrase) => {
        setIsLoading(true);
        getTopics(searchPhrase)
            .then(data => {
                setTopics(data);
                setIsLoading(false);
                sortTopics(topics);
            })
            .catch(error => {
                console.error("Error in fetching topics:", error);
            });
    }, 300);


    const sortTopics = (topics) => {

        topics.sort((a, b) => {
            if (selectedSort === 'title') {
                return a.topic.localeCompare(b.topic);
            } else if (selectedSort === 'author') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

        setTopics(topics);
    };



    return (
        <>
            <WelcomeBlock />

            <main className="container">
                <section className={styles.searchFormSection}>
                    <div className="container">
                        <form>
                            <div className={`${styles.searchForm} row p-2 align-items-center`}>
                                <div className="col-12 col-md-7">

                                    <div className="d-flex align-items-baseline">
                                        <ion-icon name="search-outline"></ion-icon>

                                        <input id="searchInput" name="search" value={searchPhrase} placeholder="Search the website..."
                                            aria-label="search input" onChange={onSearchChange} />
                                    </div>


                                </div>


                                <div className="col-6 col-md-2">
                                    <span className={styles.filterSelectLabel} aria-label="Select sort by order">Sort by:</span>
                                    <select id="sortSelect" onChange={onSortChange}>
                                        {
                                            getSortOptions().map((option, index) => (
                                                <option key={`${option}-${index}`} value={option} onChange={onSortChange}>{option}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="col-6 col-md-3">
                                    <span className={styles.filterSelectLabel} aria-label="Select sort by filter">Filter by:</span>
                                    <select id="filterSelect">
                                        {
                                            getCategories(topics).map((category, index) => (
                                                <option key={`${category}-${index}`} value={category}>{category}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                        </form>
                    </div>
                </section>


                {
                    isLoading && <LoadingSpinner label={"Loading topics..."} />
                }

                <section className={styles.topicsSection}>
                    <div className="container">
                        <h2 className="bold my-3"></h2>
                        <div className="row g-3">
                            {topics.map(topic => (
                                <div key={topic.id} className="col-12 col-md-3">
                                    <SingleTopic topic={topic} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
