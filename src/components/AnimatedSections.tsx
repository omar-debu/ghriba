"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function FadeInUp({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInLeft({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInRight({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
