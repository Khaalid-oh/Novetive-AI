import AccountIcon from "@/app/ui/icons/AccountIcon";
import AnalyticsIcon from "@/app/ui/icons/AnalyticsICon";
import DashboardICon from "@/app/ui/icons/DashboardIcon";
import InboxIcon from "@/app/ui/icons/InboxIcon";
import LogOutIcon from "@/app/ui/icons/LogOutIcon";
import NovetiveIcon from "@/app/ui/icons/NovetiveIcon";
import ReviewIcon from "@/app/ui/icons/ReviewsIcon";

export const DashboardList = [
  { icon: <NovetiveIcon />, label: "My AI", path: "/dashboard/ai" },
  { icon: <DashboardICon />, label: "Dashboard", path: "/dashboard" },
  { icon: <InboxIcon />, label: "Inbox", path: "/dashboard/inbox" },
  { icon: <AnalyticsIcon />, label: "Analytics", path: "/dashboard/analytics" },
  { icon: <ReviewIcon />, label: "Reviews", path: "/dashboard/reviews" },
  { icon: <AccountIcon />, label: "Account", path: "/dashboard/account" },
];

export const LogoutNav = [{ icon: <LogOutIcon />, label: "Log Out" }];
