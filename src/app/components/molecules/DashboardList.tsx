import Reviews from "@/app/[dashboard]/reviews/page";
import AccountIcon from "@/app/ui/icons/AccountIcon";
import AnalyticsIcon from "@/app/ui/icons/AnalyticsICon";
import DashboardICon from "@/app/ui/icons/DashboardIcon";
import InboxIcon from "@/app/ui/icons/InboxIcon";
import LogOutIcon from "@/app/ui/icons/LogOutIcon";
import NovetiveIcon from "@/app/ui/icons/NovetiveIcon";
import ReviewIcon from "@/app/ui/icons/ReviewsIcon";

export const DashboardList = [
  { icon: <NovetiveIcon />, label: "My AI" },
  { icon: <DashboardICon />, label: "Dashboard" },
  { icon: <InboxIcon />, label: "Inbox" },
  { icon: <AnalyticsIcon />, label: "Analytics" },
  { icon: <ReviewIcon />, label: "Reviews" },
  { icon: <AccountIcon />, label: "Account" },
  { icon: <LogOutIcon />, label: "Log Out" },
];
