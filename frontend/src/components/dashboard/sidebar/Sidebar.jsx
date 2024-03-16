
import { useState } from "react";
import { BiSolidDashboard, BiAnalyse, BiSolidReport, BiFile } from "react-icons/bi";
import {Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";

const Sidebar = () => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    }
  return (
    <Card className="sidebar pt-10">
        <Typography className="logo_sidebar text-center relative">
            Gjayz Car Rent
        </Typography>
            <List>
               
                <Accordion open={open === 1} icon={ <div strokeWidth={2.5} className={`mx-auto transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
                <span className="pl-8 text-xs italic">MENU</span>
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 ml-3">
                            <ListItemPrefix>
                                    <BiSolidDashboard className="text-sm"/>
                            </ListItemPrefix>

                            <Typography color="blue-gray" className=" mr-auto ">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-0">
                        <List className="py-0 ">

                            <ListItem>
                                <ListItemPrefix>
                                    <BiAnalyse/>
                                </ListItemPrefix>
                                    Analytics
                            </ListItem>

                            <ListItem>
                                <ListItemPrefix>
                                    <BiSolidReport/>
                                </ListItemPrefix>
                                    Reporting
                            </ListItem>

                            <ListItem>
                                <ListItemPrefix>
                                    <BiFile/>
                                </ListItemPrefix>
                                    Projects
                            </ListItem>

                        </List>
                    </AccordionBody>
                </Accordion>
      
















      <ListItem>
        <ListItemPrefix>
        <BiSolidDashboard className=" text-sm"/>
        </ListItemPrefix>
        E-Commerce
      </ListItem>

      <ListItem>
        <ListItemPrefix>
        <BiSolidDashboard className=" text-sm"/>
        </ListItemPrefix>
        Inbox
      </ListItem>

      <ListItem>
        <ListItemPrefix>
        <BiSolidDashboard className=" text-sm"/>
        </ListItemPrefix>
        Profile
      </ListItem>
      
      <ListItem>
        <ListItemPrefix>
        <BiSolidDashboard className=" text-sm"/>
        </ListItemPrefix>
        Settings
      </ListItem>


      <ListItem>
        <ListItemPrefix>
        <BiSolidDashboard className=" text-sm"/>
        </ListItemPrefix>
        Log Out
      </ListItem>
    </List>
  </Card>
  )
}

export default Sidebar
