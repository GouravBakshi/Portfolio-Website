import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const items = [
    {
        id: 1,
        title: "React Commerece",
        img: "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_640.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam harum voluptate libero veritatis facilis doloribus enim iure corrupti nostrum amet, molestias tempora, ullam rem officia, veniam atque dignissimos non."

    },
    {
        id: 2,
        title: "Music App",
        img: "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_640.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam harum voluptate libero veritatis facilis doloribus enim iure corrupti nostrum amet, molestias tempora, ullam rem officia, veniam atque dignissimos non."

    },
    {
        id: 3,
        title: "Tailwind App",
        img: "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_640.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam harum voluptate libero veritatis facilis doloribus enim iure corrupti nostrum amet, molestias tempora, ullam rem officia, veniam atque dignissimos non."

    },
    {
        id: 4,
        title: "Twitter Clone",
        img: "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_640.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam harum voluptate libero veritatis facilis doloribus enim iure corrupti nostrum amet, molestias tempora, ullam rem officia, veniam atque dignissimos non."

    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map(item => (
                    <Single item={item} key={item.id} />
                ))
            }
        </div>

    )
}

export default Portfolio