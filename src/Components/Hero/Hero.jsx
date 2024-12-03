import "./hero.scss"
import { motion } from "motion/react"

const textVariants={
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildern: 0.1
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants={
    initial: {
        x: 0,
    },
    animate: {
        x: "-500%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror" ,
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Gourav Bakshi</motion.h2>
                    <motion.h1 variants={textVariants}>Java Full Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <a href='#Contact'><motion.button variants={textVariants}>Contact Me</motion.button></a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Problem Solver Creative Passionate
            </motion.div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero