import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FolderUploadInterceptor implements NestInterceptor {
  constructor(private readonly destinationPath: string) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const file = request.file;

    if (file) {
      const originalname = file.originalname
        .toLowerCase() // Convert to lowercase
        .replace(/[\s:]+/g, '_') // Replace spaces and colons with underscores
        .normalize('NFD') // Normalize accents
        .replace(/[\u0300-\u036f]/g, ''); // Remove combining diacritical marks
      const fileExtension = file.originalname.split('.').pop();
      const modifiedName = `${originalname}.${fileExtension}`;
      const filePath = `${this.destinationPath}/${modifiedName}`;
      console.log(2222, __dirname);
      console.log(33333, filePath);

      fs.writeFileSync(filePath, file.buffer);
      request.filePath = filePath; // Optional: Store the file path in the request object for further processing

      // You can also modify other properties of the file object if needed
      file.originalname = modifiedName;
      file.filename = modifiedName;
    }

    return next.handle();
  }
}
