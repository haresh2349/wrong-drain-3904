import { Box, Button, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "./togglTrackPage.module.css";
import {
  BsBellFill,
  BsClockFill,
  BsBagDashFill,
  BsFillTagFill,
  BsFillCheckCircleFill,
  BsCurrencyDollar,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  RiFileList2Fill,
  RiFileUserFill,
  RiSettings5Fill,
} from "react-icons/ri";
import { GoPulse } from "react-icons/go";
import { IoIosFolder, IoIosHelpCircle } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaFolderMinus, FaStopCircle } from "react-icons/fa";
import { GiPlug } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import CalendarTopSection from "../../Components/CalendarTopSection";
import { useState } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";

const TogglTrackPage = () => {
  const [timer, setTimer] = useState(0);
  let timerid = useRef(null);

  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // const time = hours + ":" + minutes + ":" + " " + ampm;

  const strTime = hours + ":" + minutes + " " + ampm;

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ": " + minutes + ": " + seconds;
  }

  const startTimer = () => {
    if (!timerid.current) {
      let id = setInterval(() => {
        setTimer((prev) => prev + 100);
      }, 100);

      timerid.current = id;
    }
  };

  const stopTimer = () => {
    clearInterval(timerid.current);
    timerid.current = null;
    setTimer(0);
  };

  // const endminutes=date.getMinutes() + 10 + ' ' + ampm;
  //   // const endTime=hours+ ":" + endminutes
  // console.log(strTime)

  const [show, setShow] = useState(false);

  return (
    <div className={styles.togglTrackPage_main_container}>
      <div className={styles.sideBar_container}>
        <div className={styles.sideBar_header}>
          <div className={styles.sideBar_header_title}>
            <span className={styles.sideBar_header_toggl}>toggl</span>
            <span className={styles.sideBar_header_track}>track</span>
          </div>
          {/* notifcation icon */}
          <BsBellFill />
        </div>

        <div className={styles.sideBar_Bars}>
          {/* track div */}

          <div className={styles.sideBar_track_div}>
            <div className={styles.sideBar_track_div_heading}>TRACK</div>
            <div className={styles.sideBar_track_div_inside_div}>
              <BsClockFill className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Timer
              </div>
            </div>
          </div>

          {/* analyze div */}

          <div className={styles.sideBar_analyze_div}>
            <div className={styles.sideBar_track_div_heading}>ANALYZE</div>
            <div className={styles.sideBar_track_div_inside_div}>
              <RiFileList2Fill className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Reports
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <GoPulse className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Insights
              </div>
            </div>
          </div>

          {/* manage div */}

          <div className={styles.sideBar_manage_div}>
            <div className={styles.sideBar_track_div_heading}>MANAGE</div>

            <div className={styles.sideBar_track_div_inside_div}>
              <IoIosFolder className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Projects
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <RiFileUserFill className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Clients
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <HiUsers className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Team
              </div>
            </div>

          
            <div className={styles.sideBar_track_div_inside_div}>
              <BsFillTagFill className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Tags
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <IoIosHelpCircle className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Help
              </div>
            </div>

            <div className={styles.sideBar_track_div_inside_div}>
              <FaFolderMinus className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Subscription
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <GiPlug className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Integration
              </div>
            </div>
            {/* <div className={styles.sideBar_track_div_inside_div}> */}
            {/* <BsClockFill className={styles.icon}/>
    <div className={styles.sideBar_track_div_track_timer_title}>Import/Export</div>
   </div>
   <div className={styles.sideBar_track_div_inside_div}>
    <BsClockFill className={styles.icon}/>
    <div className={styles.sideBar_track_div_track_timer_title}>Mobile App</div>
   </div>
   <div className={styles.sideBar_track_div_inside_div}>
    <BsClockFill className={styles.icon}/>
    <div className={styles.sideBar_track_div_track_timer_title}>Desktop App</div>
   </div>
   <div className={styles.sideBar_track_div_inside_div}>
    <BsClockFill className={styles.icon}/>
    <div className={styles.sideBar_track_div_track_timer_title}>Blog</div>
   </div>
   <div className={styles.sideBar_track_div_inside_div}>
    <BsClockFill className={styles.icon}/>
    <div className={styles.sideBar_track_div_track_timer_title}>Jobs</div>
   </div> */}
          </div>

          {/* admin div */}
          <div className={styles.sideBar_admin_div}>
            <div className={styles.sideBar_track_div_heading}>ADMIN</div>
            <div className={styles.sideBar_track_div_inside_div}>
              <CgOrganisation className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Organisations
              </div>
            </div>
            <div className={styles.sideBar_track_div_inside_div}>
              <RiSettings5Fill className={styles.icon} />
              <div className={styles.sideBar_track_div_track_timer_title}>
                Settings
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sideBar_trial_div}>
          <div className={styles.sideBar_trial}>
            <div className={styles.sideBar_thirty}> Trial: 30 days left</div>
            <div className={styles.sideBar_upgrade}>Upgrade today</div>
          </div>
          <hr className={styles.hr} />

          <div className={styles.resume_onboarding}>
            <BsFillCheckCircleFill />
            <div>Resume </div>
          </div>
        </div>

        <div className={styles.workspace}>
          <div className={styles.sideBar_track_div_heading_workspace}>
            WORKSPACE
          </div>
          <div className={styles.sideBar_email_data}>
            <BsBagDashFill className={styles.bag_icon} />

            <div className={styles.email_id}>jainbhav...</div>
            <ChevronDownIcon />
          </div>
        </div>

        <div className={styles.sidebar_footer}>
          <div className={styles.footer_email}>jainbhavesh...</div>
          <div className={styles.emoji}>🙂</div>
        </div>
      </div>

      {/* ********  Right Container *********************** */}

      <div className={styles.right_container}>
        {/* ****************  Right TopSection ***********8 */}
        <div className={styles.right_topsection}>
          <div className={styles.right_input_div}>
            <Input type="text" placeholder="What are you working on?" focusBorderColor="white" _placeholder={{  color: 'gray.500' ,fontWeight:"bold"}}/>
          </div>



  <div className={styles.create_button}  >Create Project</div>




          <BsFillTagFill />
          <BsCurrencyDollar />

          <Popover>
            <PopoverTrigger>
              <div className={styles.right_timer}>{msToTime(timer)}</div>
            </PopoverTrigger>

            <PopoverContent mr="80px" mt="30px">
              <PopoverHeader>
                <Box display={"flex"} justifyContent="space-around">
                  {" "}
                  <Box>
                    <Box textAlign={"center"}>Start</Box>
                    <Box display={"flex"} gap="20px">
                      <Box>{strTime}</Box>
                      <Box>Today</Box>
                    </Box>
                  </Box>
                  <Box>End</Box>
                </Box>
              </PopoverHeader>

              <CalendarTopSection border="none" />
            </PopoverContent>
          </Popover>

          <Box
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <FaStopCircle
                className={styles.stop_icon}
                onClick={() => stopTimer()}
              />
            ) : (
              <BsFillPlayCircleFill
                onClick={() => startTimer()}
                className={styles.play_icon}
              />
            )}
          </Box>
          <div>
            <BsFillPlayCircleFill className={styles.second_play_icon} />
            <AiFillPlusCircle className={styles.plus_icon} />
          </div>
        </div>

        {/*  ************  Middle Section      ******************* */}

        <div className={styles.middle_section_main_div}>
          <div className={styles.middle_section_upper_div}>
            <div className={styles.middle_section_upper_left_div}>TODAY</div>
            <div className={styles.middle_section_upper_right_div}>
              <div className={styles.middle_section_week_div}>
                <div style={{ width: "80px" }}>WEEK TOTAL</div>
                <div>0:16:00</div>
              </div>
              <div className={styles.middle_section_box_div}>
                <div style={{ borderRight: "1px solid", height: "30px" }}>
                  <ChevronLeftIcon mr="10px" />
                </div>
                <div>This Week</div>
                <div style={{ borderLeft: "1px solid", height: "30px" }}>
                  <ChevronRightIcon ml="10px" />
                </div>
              </div>
              <div></div>
              <RiSettings5Fill fontSize={"20px"} />
              <Button
                bg="#fef9f7"
                _hover={{
                  backgroundColor: "#fef9f7",
                }}
                fontSize="12px"
              >
                VIEWS <ChevronDownIcon />
              </Button>
            </div>
          </div>
          <div className={styles.middle_section_lower_div}>
            <div className={styles.middle_section_noproject_div}>
              (NO PROJECT)
            </div>
            <div className={styles.middle_section_box_line}>{/* line */}</div>
          </div>
        </div>

        {/* calendar section */}
        <div className={styles.calendar_section_main_div}>
          <table className={styles.calendar_time_table}>
            <thead>
              <tr>
                <th className={styles.calender_first_heading}>
                  <MinusIcon fontSize="12px" color={"black"} />
                  <AddIcon fontSize="12px" />{" "}
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>22</span>{" "}
                    <span className={styles.span_day}>Mon</span>{" "}
                    <p className={styles.heading_time}>0:15:00</p>
                  </h6>
                </th>

                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>23</span>{" "}
                    <span className={styles.span_day}>Tue</span>{" "}
                    <p className={styles.heading_time}>0:10:00</p>
                  </h6>
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>24</span>{" "}
                    <span className={styles.span_day}>Wed</span>{" "}
                    <p className={styles.heading_time}>0:00:00</p>
                  </h6>
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>25</span>{" "}
                    <span className={styles.span_day}>Thur</span>{" "}
                    <p className={styles.heading_time}>0:15:00</p>
                  </h6>
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>26</span>{" "}
                    <span className={styles.span_day}>Fri</span>{" "}
                    <p className={styles.heading_time}>0:15:00</p>
                  </h6>
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>27</span>{" "}
                    <span className={styles.span_day}>Sat</span>{" "}
                    <p className={styles.heading_time}>0:15:00</p>
                  </h6>
                </th>
                <th className={styles.calendar_section_table_heading}>
                  <h6>
                    <span className={styles.date_span}>28</span>{" "}
                    <span className={styles.span_day}>Sun</span>{" "}
                    <p className={styles.heading_time}>0:15:00</p>
                  </h6>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* *******  row1 ***************/}
              <tr>
                <td>9:00 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row2 ***************/}
              <tr>
                <td>10:00 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row3 ***************/}
              <tr>
                <td>11:00 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row4 ***************/}
              <tr>
                <td>12:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row5 ***************/}
              <tr>
                <td>1:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row6 ***************/}
              <tr>
                <td>2:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row7 ***************/}
              <tr>
                <td>3:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row8 ***************/}
              <tr>
                <td>4:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row9 ***************/}
              <tr>
                <td>5:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row10 ***************/}
              <tr>
                <td>6:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row11 ***************/}
              <tr>
                <td>7:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row12 ***************/}
              <tr>
                <td>8:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row13 ***************/}
              <tr>
                <td>9:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row14 ***************/}
              <tr>
                <td>10:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row15 ***************/}
              <tr>
                <td>11:00 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {/* *******  row16 ***************/}
              <tr>
                <td>00:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TogglTrackPage;
