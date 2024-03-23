import { useEffect, useState } from "react";
import { getTopics } from "../../features/topics/services/topics.service";
import { SingleTopic } from "../../features/topics/components/single-topic/single-topic";
import styles from "./home.module.css"; // Adjusted import here

export function Home() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics()
            .then(data => {
                setTopics(data);
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

    return (
        <>
            <section className={styles.blockDesign}>
                <div className={styles.primaryTriangle}></div>
                <div className={styles.secondaryTriangle}></div>
                <div className="mt-4">
                    <h2 className="title mb-0">Welcome to our website!</h2>
                    <p className="subtitle">We have a new design that's fresh, modern, and easy to use.</p>
                </div>
            </section >

            <main className="container">
                <section className={styles.searchFormSection}>
                    <div className="container">
                        <form>
                            <div className={`${styles.searchForm} row p-2 align-items-center`}>
                                <div className="col-12 col-md-7">

                                    <div className="d-flex align-items-baseline">
                                        <ion-icon name="search-outline"></ion-icon>

                                        <input id="searchInput" name="search" placeholder="Search the website..."
                                            aria-label="search input" />
                                    </div>


                                </div>


                                <div className="col-6 col-md-2">
                                    <span className={styles.filterSelectLabel} aria-label="Select sort by order">Sort by:</span>
                                    <select id="sortSelect">
                                        {
                                            getSortOptions().map(option => (
                                                <option value={option}>{option}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="col-6 col-md-3">
                                    <span className={styles.filterSelectLabel} aria-label="Select sort by filter">Filter by:</span>
                                    <select id="filterSelect">
                                        {
                                            getCategories(topics).map(category => (
                                                <option value={category}>{category}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                            </div>
                        </form>
                    </div>
                </section>

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
