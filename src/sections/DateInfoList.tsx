import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { dateInfoListAtom } from "@/atoms/dateInfoList";
import { P } from "@/components/Typography";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const DateInfoList = () => {
  const router = useRouter();
  const [dateInfoList] = useAtom(dateInfoListAtom);
  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="border-primary border w-full" variant="ghost">
          인생 달력 구경하기
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>인생 달력 목록</DrawerTitle>
          <DrawerDescription>원하는 인생 달력을 선택하세요.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="flex flex-col gap-3 items-center">
            {dateInfoList.length === 0 ? (
              <>
                <P>아직 아무 기록이 없어요😅</P>
                <Button variant="outline">돌아가기</Button>
              </>
            ) : (
              dateInfoList.map((dateInfo) => (
                <Button
                  onClick={() => {
                    router.push(`/calendar/${dateInfo.id}`);
                  }}
                  key={dateInfo.id}
                  variant="outline"
                  className="w-full flex justify-around items-center"
                >
                  <div>{dayjs(dateInfo.birthDate).format("🎉 YYYY.MM.DD")}</div>
                  <div>{`💪 ${dateInfo.expectHealthAge}`}</div>
                  <div>{`🪦 ${dateInfo.expectAge}`}</div>
                </Button>
              ))
            )}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DateInfoList;
