import { promises as fs } from 'fs';
import * as path from 'path';

export async function saveUsername(username: string): Promise<void> {
  const filePath = path.resolve(__dirname, '../data/registeredUsers.json');
  
  try {
    // Read existing file content
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const users = JSON.parse(fileContent);
    
    // Append new username
    users.push({ username });
    
    // Write updated content back to the file
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, create a new one
      const users = [{ username }];
      await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    } else {
      throw error;
    }
  }
}
