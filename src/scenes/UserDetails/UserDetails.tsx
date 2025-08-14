import React from "react";
import { useParams, Link } from "react-router-dom";
import { UserCard } from "../components/UserCard/UserCard";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Spinner } from "modules";
import type { UserDetailsProps } from "./userDetails.types";
import { useUserDetails } from "./userDetails.hooks";

export const UserDetails: React.FC<UserDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useUserDetails(id);

  return (
    <div className="p-3">
      <div className="mb-8">
        <Link to="/users">
          <Button
            label="Back to Users"
            icon="pi pi-arrow-left"
            className="user-detail-scene__back"
          />
        </Link>
      </div>
      {!loading && user ? (
        <Panel header="User Details">
          <div className="grid sm:grid-cols-2 gap-4 items-start">
            {/* Left column: Profile image, Name & Username (no title), then Company */}
            <div className="flex flex-col gap-3">
              <UserCard imageSrc="/images/default_pfp.jpg" name={user.name} username={user.username} />
              <UserCard title="Company Information" website={user.website} company={user.company} />
            </div>

            {/* Right column: Personal Information */}
            <div>
              <UserCard
                title="Personal Information"
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
              />
            </div>
          </div>
        </Panel>
      ) : (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      )}
    </div>
  );
};
