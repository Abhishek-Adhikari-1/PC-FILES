import pyautogui
import time
from datetime import datetime

while (datetime.now().minute != 59):
    now = datetime.now()
    min = (60 - now.minute)

    pyautogui.typewrite('Happy Birthday hatti mero sathi❤ ')
    for d in str(min):
        pyautogui.keyDown(d)
    pyautogui.typewrite(' mins.')
    pyautogui.press('enter')
    time.sleep(60)

while (datetime.now().minute == 59):
    while (datetime.now().second != 59):
        sec = (60 - datetime.now().second)
        pyautogui.typewrite('Happy Birthday hatti mero sathi❤ ')
        for z in str(sec):
            pyautogui.keyDown(z)
        pyautogui.typewrite(' sec left for your happiest day')
        pyautogui.press('enter')

while (datetime.now().hour < 1):
    pyautogui.typewrite('Greatest wala Happy Birthday mero pyaro itra jiu life ma sadhai kushi hunu dherai paisa kamaunu xittai mummy lai vetnu bidesh gara aunty ani ekdam khusi hu malai vetttnu aaija ani nabirsi 🤣 Happpy Birthday Hazi!')
    pyautogui.press('enter')
