import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import getUserInfo from "@/server/getUserInfo";

export default async function UserCard() {
  const Id = 1;
  const data = await getUserInfo(Id);

  return (
    <div>
      <Card className="min-w-[235px]">
        <CardContent className="flex flex-row gap-4 p-4">
          <div>
            <Avatar>
              <AvatarImage
                src={
                  "https://avatars.githubusercontent.com/u/116845052?s=400&u=3fe905ed43ebbec31328fca24926dcb6ffa33976&v=4"
                }
              />
              <AvatarFallback>PFP</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-center">{data.name}</p>
            <Badge variant={"outline"} className="">
              {data.email}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
