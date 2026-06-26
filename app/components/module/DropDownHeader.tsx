"use client";

import { Avatar, Dropdown, Label } from "@heroui/react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { UserRound } from "lucide-react";
type Props = {
    session: Session;
};

const DropDownHeader = ({ session }: Props) => {




    const userName =
        session?.user?.name || session?.user?.email?.split("@")[0] || "User";

    const userEmail = session?.user?.email || "";

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <Dropdown >
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image
                        alt={userName}
                        src={
                            session?.user?.image || ""

                        }
                    />
                    <Avatar.Fallback>
                       <UserRound />
                    </Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>

            <Dropdown.Popover>
                {/* Header user info */}
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      
                        <div className="flex flex-col">
                            <p className="text-sm font-medium leading-5">{userName}</p>
                            <p className="text-xs text-muted leading-none">{userEmail}</p>
                        </div>
                    </div>
                 
                </div>
   <div className="border-b border-gray-300 py-1"></div>
                {/* Menu */}
                <Dropdown.Menu
                    onAction={(key) => {
                        console.log("selected:", key);
                    }}
                >
                   

                    <Dropdown.Item id="settings" textValue="Settings">
                        <Label>محصولات</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="logout"
                        textValue="Logout"
                        variant="danger"
                        onPress={handleLogout}
                    >
                        <Label>خروج از حساب</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default DropDownHeader;