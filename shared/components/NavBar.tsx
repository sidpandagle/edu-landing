import Image from "next/image";

export default function NavBar() {
    return (
        <div className="border-b">
            <div id="navbar" className="container mx-auto p-4 md:p-8 flex gap-8 justify-between items-center">
                <div>NSARROWS</div>
                <div className="hidden md:flex gap-8">
                    <a href="/#whatwesupport" className="cursor-pointer">What We Support</a>
                    <a href="/#milestones" className="cursor-pointer">Milestones</a>
                    <a href="/#skills" className="cursor-pointer">Skills</a>
                    <a href="/#certification" className="cursor-pointer">Certification</a>
                </div>
                <a href="/#contact-us" className="hidden md:flex cursor-pointer">Contact Us</a>
                <div className="dropdown dropdown-end md:hidden z-20">
                    <div tabIndex={0} role="button" className="btn m-1">///</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/#whatwesupport" className="cursor-pointer">What We Support</a></li>
                        <li><a href="/#milestones" className="cursor-pointer">Milestones</a></li>
                        <li><a href="/#skills" className="cursor-pointer">Skills</a></li>
                        <li><a href="/#certification" className="cursor-pointer">Certification</a></li>
                        <li><a href="/#contact-us" className="md:flex cursor-pointer">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
