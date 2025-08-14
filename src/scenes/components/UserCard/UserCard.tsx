import type { UserCardProps } from "./userCard.types";
import { Card } from "modules";

export const UserCard = (props: UserCardProps) => {
  const { title, imageSrc, name, username, email, phone, website, company, address } =
    props;

  return (
    <Card
      title={title}
      className="mb-4"
      header={
        imageSrc ? (
          <img
            src={imageSrc}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
        ) : null
      }
    >
      <div className="sm:grid-cols-2 gap-x-8 gap-y-2">
        {name && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Name</p>
            <p className="font-medium break-words">{name}</p>
          </div>
        )}
        {username && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Username</p>
            <p className="font-medium break-words">{username}</p>
          </div>
        )}
        {email && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Email</p>
            <p className="font-medium break-words">{email}</p>
          </div>
        )}
        {phone && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Phone</p>
            <p className="font-medium break-words">{phone}</p>
          </div>
        )}
        {(address?.suite ||
          address?.street ||
          address?.city ||
          address?.zipcode) && (
          <div className="flex flex-col gap-1 sm:col-span-2">
            <p className="text-gray-500">Address</p>
            <p className="font-medium break-words">
              {[address?.suite, address?.street, address?.city]
                .filter(Boolean)
                .join(", ")}
              {address?.zipcode ? ` ${address.zipcode}` : ""}
            </p>
          </div>
        )}
        {website && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Website</p>
            <p className="font-medium break-words">{website}</p>
          </div>
        )}
        {company?.name && (
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Company</p>
            <p className="font-medium break-words">{company.name}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
