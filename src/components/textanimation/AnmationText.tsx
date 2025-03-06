import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TextAnimate } from "../../utils/FramerAniamtion";
interface ITextAnimate {
  text: string | string[];
  className: string;
  el?: keyof JSX.IntrinsicElements;
}
function TextAniamtion({ text, className, el: Wrapper = "p" }: ITextAnimate) {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();
  let timeout: number;
  useEffect(() => {
    const Show = () => {
      timeout = setTimeout(async () => {
        await controls.start("hidden");
        await controls.start("visible");
      }, 2000);
    };
    if (isInView) {
      Show();
    } else {
      controls.start("hidden");
    }
    return () => {
      clearInterval(timeout);
    };
  }, [isInView]);
  return (
    <Wrapper className={className}>
      <motion.span
        variants={{
          visible: {
            transition: { staggerChildren: 0.2},
          },
          hidden: {}
        }}
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        {textArray.map((line) => (
          <span className="block">
            {line.split(" ").map((word) => (
              <span className="inline-block tracking-[3px]">
                {word.split("").map((char) => (
                  <motion.span variants={TextAnimate} className="inline-block ">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default TextAniamtion;
