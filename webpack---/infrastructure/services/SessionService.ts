import { v4 as uuidv4 } from "uuid"

import { storageService } from "infrastructure/services/StorageService"
import { expSessionSec } from "infrastructure/consts/expSession"

class SessionService {
  async initSession() {
    const session = await storageService.getItem("session")

    if (!session || session.expDate < Date.now() / 1000) {
      await storageService.setItem("session", {
        requestId: uuidv4(),
        expDate: Date.now() / 1000 + expSessionSec,
      })
    }
  }

  async createSession() {
    const session = await storageService.getItem("session")

    if (!session) {
      await storageService.setItem("session", {
        requestId: uuidv4(),
        expDate: Date.now() / 1000 + expSessionSec,
      })
    }
  }

  async updateExpDate(requestId: string) {
    await storageService.setItem("session", {
      requestId,
      expDate: Date.now() / 1000 + expSessionSec,
    })
  }

  async deleteSession() {
    await storageService.removeItem("session")
  }
}

export const sessionService = new SessionService()
