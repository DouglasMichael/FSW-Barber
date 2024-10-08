import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookinItem = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Comfirmado</Badge>
                    <h2 className="font-semibold">Corte de Cabelo</h2>
                    <div className="flex items-center gap-2">
                        <Avatar className=" h-8 w-8">
                            <AvatarImage src="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png" />
                            <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <h3>Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
                    <p>Fevereiro</p>
                    <p className="text-xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default BookinItem;