import { useContext } from "react";
import { Loader } from "../../components/Spinner/Spinner";
import "./Home.css";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { Category } from "../../components/Category/Category";
import { Link } from "react-router-dom";

export function Home() {
    const { categories, isLoading } = useContext(CategoriesContext);

    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <Loader />
                </div>
            ) : (
                <div className="container">
                    <div className="hero">
                        <div className="hero__left">
                            <h2 className="hero__title">Welcome to Planty</h2>
                            <p className="hero__text">
                                Et laoreet dolore eirmod magna clita eirmod
                                dolor. Nonummy et rebum rebum ipsum et gubergren
                                dolores sed invidunt euismod odio dolor. Exerci
                                facilisi et. Nobis facilisis sanctus amet
                                accusam ut elitr esse sadipscing kasd velit sea
                                diam et et.
                            </p>
                            <Link
                                to="/products"
                                className="link--decor-none link--primary hero__link"
                            >
                                Shop
                            </Link>
                        </div>
                        <div className="hero__right">
                            <img
                                className="hero__image"
                                src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1689850385/planty/15bcopy_i0s1xr.jpg"
                            />
                        </div>
                    </div>
                    <div className="categories-container">
                        <h2>Categories</h2>
                        <div className="categories">
                            <ul className="categories__list">
                                {categories.map((category, index) => (
                                    <Category
                                        key={category.id}
                                        category={category}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <img
                            src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1690005767/planty/aboutcms1_l9kfkp.png"
                            alt=""
                            className="banner__image"
                        />

                        <p className="banner__text">
                            Et laoreet dolore eirmod magna clita eirmod dolor.
                            Nonummy et rebum rebum ipsum et gubergren dolores
                            sed invidunt euismod odio dolor. Exerci facilisi et.
                            Nobis facilisis sanctus amet accusam ut elitr esse
                            sadipscing kasd velit sea diam et et.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
