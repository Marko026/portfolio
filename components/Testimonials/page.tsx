"use client";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState(["front", "middle", "back"]);
  const [dragging, setDragging] = useState(false);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order].filter((item) => item !== undefined);
      orderCopy.unshift(orderCopy.pop() as string);
      setOrder(orderCopy);
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          orderCopy.unshift(orderCopy.pop() as string);
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <section
      style={{ pointerEvents: dragging ? "none" : undefined }}
      className="overflow-hidden bg-transparent px-8  py-24 text-white-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 md:gap-8">
        <div>
          <h1 className="text-5xl text-center lg:text-left font-black leading-[1.25] md:text-7xl">
            Testimonials
          </h1>
          <p className="mb-8 mt-4 text-lg text-center lg:text-left text-white-800">
            What makes me different from other professionals in my field? Let my
            colleagues tell you. These are honest and authentic testimonials
            from people who worked with me and experienced my value
          </p>
        </div>
        <motion.div
          whileTap={{ scale: 0.985 }}
          className="relative h-[450px] w-[350px] md:ml-20 lg:ml-0">
          <Card
            imgUrl="/images/image2.jpg"
            testimonial="Marko is a brilliant developer and a team player. He always delivers high-quality code and solves complex problems"
            author="Anna F. - Full Stack Developer @ WebsiteWorkShop"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[0]}
            dragging={dragging}
            setDragging={setDragging}
          />
          <Card
            imgUrl="/images/image1.jpg"
            testimonial="Marko is a creative and innovative thinker. He comes up with original ideas and implements them with efficiency and elegance"
            author="Adrian H. - Full Stack Developer @ JsMastery"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[1]}
            dragging={dragging}
            setDragging={setDragging}
          />
          <Card
            imgUrl="/images/image3.jpg"
            testimonial="Marko is a reliable and trustworthy colleague. He is always ready to help and support others. He is a pleasure to work with."
            author="Devin R. - Growth Marketing Lead @ OpenAI"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[2]}
            dragging={dragging}
            setDragging={setDragging}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
  imgUrl,
  author,
  setDragging,
  dragging,
}: {
  handleDragEnd: () => void;
  dragProgress: any;
  testimonial: string;
  position: string;
  imgUrl: string;
  author: string;
  setDragging: (dragging: boolean) => void;
  dragging: boolean;
}) => {
  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}>
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default Testimonials;
