"use client";

import { ENROLLED_COURSES } from "@/lib/mockData";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, CreditCard, Lock, ShieldCheck, AlertCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CheckoutPage() {
    const params = useParams();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [course, setCourse] = useState<any>(null);

    useEffect(() => {
        // Mock fetching course details
        // In a real app, we'd fetch from API. Here we just find a mock course or use a default.
        const foundCourse = ENROLLED_COURSES.find(c => c.id === params.courseId) || ENROLLED_COURSES[0];
        setCourse(foundCourse);
    }, [params.courseId]);

    const handlePurchase = async () => {
        setIsProcessing(true);
        // Simulate API call
        await new Promise(r => setTimeout(r, 2000));
        setIsProcessing(false);
        setIsSuccess(true);

        // Redirect after success animation
        setTimeout(() => {
            router.push("/dashboard");
        }, 2000);
    };

    if (!course) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/5 border border-green-500/30 p-8 rounded-2xl text-center max-w-md w-full backdrop-blur-xl"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Access Granted!</h2>
                    <p className="text-gray-400 mb-6">You have successfully enrolled in <br /><span className="text-neon-blue">{course.title}</span></p>
                    <p className="text-sm text-gray-500 animate-pulse">Redirecting to dashboard...</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 flex items-center justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Order Summary */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-6"
                >
                    <Link href="/courses" className="text-sm text-gray-500 hover:text-white transition-colors">
                        &larr; Back to Courses
                    </Link>

                    <h1 className="text-4xl font-bold mb-2">Complete Your Enrollment</h1>
                    <p className="text-gray-400 text-lg mb-8">Unlock full access to the cybernetic curriculum.</p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex gap-4 mb-6">
                            <div className={`w-24 h-24 rounded-lg bg-gradient-to-br from-${course.color}-900/50 to-black border border-${course.color}-500/30 flex-shrink-0`}>
                                {/* Placeholder for course image */}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-2">{course.description}</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-4 space-y-2">
                            <div className="flex justify-between text-gray-400">
                                <span>Course Price</span>
                                <span>$99.00</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Processing Fee</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10 mt-2">
                                <span>Total</span>
                                <span className="text-neon-green">$99.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Secure 256-bit SSL Encrypted Payment</span>
                    </div>
                </motion.div>

                {/* Payment Form */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <CreditCard className="w-6 h-6 text-neon-blue" /> Payment Details
                    </h2>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handlePurchase(); }}>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Cardholder Name</label>
                            <input type="text" placeholder="Alex Cyber" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Card Number</label>
                            <div className="relative">
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors font-mono" />
                                <Lock className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Expiry Date</label>
                                <input type="text" placeholder="MM/YY" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors font-mono" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">CVC</label>
                                <input type="text" placeholder="123" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors font-mono" />
                            </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex gap-3 items-start">
                            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-200">
                                This is a secure mock payment environment. No real charges will be made. You can enter any dummy data to proceed.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white font-bold py-4 rounded-lg shadow-lg shadow-purple-500/20 transition-all transform active:scale-95"
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Processing...
                                </span>
                            ) : (
                                "Confirm Purchase - $99.00"
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
