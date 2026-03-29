import { Context, NextFunction } from "grammy";
import { ConfigService } from "../../services/config";

export class AuthMiddleware{
constructor(private _configService: ConfigService) {}

    public get middleware (){
        return async (ctx: Context , next: NextFunction) =>{
            const userId = ctx.from?.id;

            const adminId = this._configService.getNumber('ADMIN_ID');

            if (userId == adminId ){
                await next();

            }else {
                console.log(`Попытка доступа от постороннего! ID: ${userId}`);
                await ctx.reply('Доступ запрешен. Эту команду  может вызвать только владелец.');
            }

        }
    }
}
