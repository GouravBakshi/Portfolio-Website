import { useRef, useState } from "react";
import "./contact.scss"
import { motion, useInView } from "motion/react";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildern: 0.1,
        }
    }
};

const Contact = () => {

    const ref = useRef()
    const formRef = useRef()

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("Your Service Key", 'Your Template Key', formRef.current, {
                publicKey: 'Your Public Key',
            })
            .then(
                () => {
                    setSuccess(true);
                    setError(false);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                },
                (error) => {
                    setError(true);
                    setSuccess(false); 
                    setTimeout(() => {
                        setError(false);  
                    }, 2000);
                },
            );
    };

    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>abc@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>India</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 12345678</span>
                </motion.div>
            </motion.div>
            {!success?(<div className="formContainer">
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >

                    <svg fill="#ffa500" width="20rem" height="20rem" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffa500"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <motion.path
                            strokeWidth={0.5}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}

                            d="M155.55273,38.9668a3.99982,3.99982,0,0,1,4.89747-2.83106A84.15513,84.15513,0,0,1,219.86426,95.5498a4,4,0,1,1-7.72852,2.06641,76.1328,76.1328,0,0,0-53.75195-53.75195A4.00014,4.00014,0,0,1,155.55273,38.9668Zm-5.45312,35.81445a44.07831,44.07831,0,0,1,31.11914,31.11914,4,4,0,1,0,7.72852-2.06641A52.09724,52.09724,0,0,0,152.166,67.05273a4,4,0,1,0-2.06641,7.72852Zm77.48828,99.79687A52.06486,52.06486,0,0,1,176,220C98.80371,220,36,157.19629,36,80A52.06484,52.06484,0,0,1,81.4209,28.41211a12.01935,12.01935,0,0,1,12.47558,7.19141L113.9873,82.48047a11.97729,11.97729,0,0,1-.99023,11.2998L96.36133,119.19922a3.938,3.938,0,0,0-.291,3.86035h.001a80.54061,80.54061,0,0,0,37.19726,37.0293,3.93529,3.93529,0,0,0,3.8711-.31836l25.03515-16.69434a11.964,11.964,0,0,1,11.38379-1.0459l46.83789,20.07325A12.01851,12.01851,0,0,1,227.58789,174.57812ZM217.24414,169.457,170.4082,149.38379a3.99254,3.99254,0,0,0-3.7959.34863l-25.03515,16.69434A11.96472,11.96472,0,0,1,129.79,167.294a88.58663,88.58663,0,0,1-40.9082-40.72364l.001.001a11.96889,11.96889,0,0,1,.78516-11.75293l16.63574-25.41895a3.99531,3.99531,0,0,0,.33008-3.76855L86.543,38.75586a3.99936,3.99936,0,0,0-3.64356-2.43652,3.71329,3.71329,0,0,0-.47558.03027A44.04825,44.04825,0,0,0,44,80c0,72.78516,59.21484,132,132,132a44.04828,44.04828,0,0,0,43.65039-38.4248A3.98053,3.98053,0,0,0,217.24414,169.457Z">
                        </motion.path>
                    </g></svg>

                    {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="650px" height="650px" viewBox="0 0 300 300"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,187.000000) scale(0.100000,-0.100000)"
                            fill="none" strokeWidth={1}>
                            <motion.path
                            strokeWidth={7}
                            fill="none"
                            initial={{pathLength: 0}}
                            animate={isInView && {pathLength: 1}}
                            transition={{duration: 3}} d="M836 1663 c-246 -52 -468 -239 -563 -473 -43 -108 -56 -191 -50 -335
                                7 -171 36 -261 130 -399 88 -130 235 -243 391 -299 63 -23 104 -31 183 -35
                                111 -5 133 2 133 42 0 47 -24 63 -106 69 -269 23 -497 201 -581 452 -23 70
                                -27 96 -27 210 0 106 4 142 21 197 59 181 172 315 336 396 108 54 191 73 304
                                73 113 0 164 -12 278 -66 154 -71 283 -214 342 -377 24 -65 27 -88 27 -208 l1
                                -135 -38 -77 c-43 -86 -103 -149 -174 -180 -24 -11 -47 -17 -50 -14 -3 2 7 21
                                22 40 18 23 31 58 38 102 l12 67 -35 28 c-65 55 -202 89 -228 57 -5 -7 -13
                                -33 -17 -58 -8 -51 -20 -70 -44 -70 -25 0 -373 355 -369 376 2 13 18 22 54 30
                                64 14 73 19 85 52 14 36 -23 150 -65 198 l-31 36 -63 -12 c-125 -25 -195 -101
                                -208 -229 -11 -97 20 -180 102 -276 107 -125 262 -282 328 -332 137 -103 296
                                -153 422 -133 167 27 318 179 369 370 19 73 19 222 -1 318 -61 295 -319 546
                                -618 601 -82 15 -227 12 -310 -6z m355 -28 c182 -47 335 -157 439 -314 214
                                -327 149 -748 -138 -884 -62 -30 -74 -32 -167 -31 -118 1 -174 19 -289 94
                                -118 77 -372 341 -426 442 -60 112 -52 247 18 321 36 39 69 55 129 63 47 6 51
                                4 76 -25 32 -39 62 -130 54 -164 -6 -20 -15 -26 -52 -31 -25 -4 -57 -17 -72
                                -30 -23 -20 -24 -25 -13 -47 16 -30 324 -347 362 -373 54 -35 98 3 98 85 0 57
                                63 58 172 3 44 -23 48 -27 48 -62 0 -68 -20 -115 -67 -160 -25 -24 -43 -45
                                -41 -48 12 -12 128 20 176 48 64 38 101 84 151 188 35 73 36 78 35 190 0 176
                                -43 294 -155 436 -97 123 -239 205 -413 240 -193 39 -421 -29 -576 -173 -291
                                -269 -307 -694 -38 -980 115 -121 311 -212 458 -213 56 0 73 -10 68 -41 -3
                                -24 -5 -24 -98 -22 -73 1 -112 7 -170 27 -237 83 -425 281 -490 518 -23 85
                                -30 293 -11 370 32 136 111 279 206 374 103 103 274 192 414 214 77 12 236 4
                                312 -15z"/>
                            <motion.path
                            strokeWidth={7} d="M1000 1395 c0 -49 -2 -48 95 -59 120 -14 261 -118 322 -238 21 -39
                                38 -92 45 -141 l13 -78 50 3 50 3 -4 44 c-11 162 -107 326 -245 421 -69 47
                                -197 90 -268 90 l-58 0 0 -45z m166 4 c115 -35 197 -91 269 -184 52 -67 100
                                -180 110 -257 l6 -58 -28 0 c-28 0 -29 2 -40 71 -16 102 -60 185 -138 258 -36
                                33 -80 68 -97 77 -42 22 -137 54 -159 54 -10 0 -29 4 -43 9 -18 8 -23 15 -19
                                30 7 28 49 28 139 0z"/>
                            <motion.path
                            strokeWidth={7} d="M1004 1297 c-3 -8 -4 -30 -2 -48 3 -32 6 -33 70 -50 124 -31 199 -93
                                238 -197 11 -29 20 -68 20 -87 l0 -35 54 0 54 0 -5 43 c-23 201 -173 356 -372
                                383 -41 5 -52 3 -57 -9z m153 -38 c62 -24 136 -79 177 -134 35 -45 76 -152 76
                                -196 0 -27 -3 -30 -27 -27 -25 3 -29 8 -34 49 -18 127 -127 240 -261 270 -54
                                13 -58 15 -58 42 0 28 1 29 37 22 20 -3 60 -16 90 -26z"/>
                        </g>
                    </svg> */}


                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}>

                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && <p style={{color: "red"}}>Error</p>}
                    {/* {success && <p>Success</p>} */}
                </motion.form>
            </div>):
                (
                    <div>
                      <h3 className="head-text" >
                        Thank you for getting in touch !
                      </h3>
                    </div>
                  )}

        </motion.div>
    )
}

export default Contact