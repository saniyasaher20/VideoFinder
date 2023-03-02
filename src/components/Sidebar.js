import React from 'react'
import { MdHomeFilled, MdOutlineVideoLibrary, MdOutlineTimelapse, MdOutlineSmartDisplay, MdOutlineWatchLater, MdOutlineSubscriptions, MdOutlineHistory, MdOutlineThumbUp, MdOutlineLocalFireDepartment, MdOutlineMusicNote, MdOutlineMovie, MdLiveTv, MdOutlineVideogameAsset, MdOutlineSportsTennis, MdLightbulbOutline, MdOutlineNote, MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from 'react-redux';
import store from "../utils/store";
import { NavLink } from "react-router-dom";

// li tag to iterate the menus
const LiTag = ({ item }) => {
    const liStyle = "flex items-center gap-5 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer";
    const iconStyle = "text-2xl";
    const nameStyle = "text-sm tracking-wide";
    return (
        <li className={liStyle}>
            <span className={iconStyle}>{item?.icon}</span>
            <span className={nameStyle}>{item?.name}</span>
        </li>
    )
}

const Sidebar = () => {
    const menu = {
        main: {
            0: {
                name: "Home",
                icon: <MdHomeFilled />,
                route: "/"
            },
            1: {
                name: "Shorts",
                icon: <MdOutlineTimelapse />,
                route: "/shorts"
            },
            2: {
                name: "Subscriptions",
                icon: <MdOutlineSubscriptions />,
                route: "/subscriptions"
            }
        },
        user: {
            0: {
                name: "Library",
                icon: <MdOutlineVideoLibrary />,
            },
            1: {
                name: "History",
                icon: <MdOutlineHistory />
            },
            2: {
                name: "Your Videos",
                icon: <MdOutlineSmartDisplay />,
            },
            3: {
                name: "Watch Later",
                icon: <MdOutlineWatchLater />
            },
            4: {
                name: "Liked Videos",
                icon: <MdOutlineThumbUp />
            }
        },
        explore: {
            0: {
                name: "Trending",
                icon: <MdOutlineLocalFireDepartment />,
            },
            1: {
                name: "Music",
                icon: <MdOutlineMusicNote />
            },
            2: {
                name: "Movies",
                icon: <MdOutlineMovie />,
            },
            3: {
                name: "Live",
                icon: <MdLiveTv />
            },
            4: {
                name: "Gaming",
                icon: <MdOutlineVideogameAsset />
            },
            5: {
                name: "News",
                icon: <MdOutlineNote />
            },
            6: {
                name: "Sports",
                icon: <MdOutlineSportsTennis />,
            },
            7: {
                name: "Learning",
                icon: <MdLightbulbOutline />
            },
            8: {
                name: "Fashion & Beauty",
                icon: <MdOutlineShoppingBag />
            }
        }
    }

    let hrStyle = 'my-5';
    let active = "!bg-red-800 underline";

    // Subscribe to the isMenuOpen value inside store
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // Early return
    if (!isMenuOpen) return null;
    return (
        <div id='sidebar' className='min-w-fit h-[91vh] overflow-y-auto overflow-x-clip' >
            <ul>
                {/* Object.values returns array of values, use map after it. */}

                {/* MAIN */}
                {Object.values(menu.main).map((item) =>
                    <NavLink key={item.name} to={item.route}
                    className={({ isActive }) =>
                            isActive ? "!bg-red-800 underline" : undefined
                        } >
                        <LiTag item={item} />
                    </NavLink>

                )}

                {/* USER */}
                <hr className={hrStyle} />
                {Object.values(menu.user).map((item) =>
                    <NavLink key={item.name} to="/">  <LiTag item={item} /> </NavLink>
                )}

                {/* EXPLORE */}
                <hr className={hrStyle} />
                <h3 className='text-base pl-3 pb-2'>Explore</h3>
                {Object.values(menu.explore).map((item) =>
                    <NavLink key={item.name} to="/">  <LiTag item={item} /> </NavLink>
                )}
            </ul>

        </div>
    )
}

export default Sidebar