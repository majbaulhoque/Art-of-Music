import courseData from "../data/music_courses.json"
import Link from "next/link"
import { Button } from "./ui/moving-border";


function FeatureCourses() {
    courseData.courses.filter(course => course.isFeatured)
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div>
                    <div className="text-center">
                        <h2 className="text-center text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

                    </div>
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/courses"}>
                        <Button
                        style={{ borderRadius: "1.75rem"}}
                        className="bg-white hover:bg-purple-500 text-black font-semibold" 
                        >View All Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeatureCourses
