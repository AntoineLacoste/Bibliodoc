regedit %~dp0%allow.reg
Certutil -addStore TrustedPeople %~dp0%App1_1.0.0.0_AnyCPU_Debug.cer
Slmgr /ipk 2RHXN-7CFVC-7HGCB-G2R97-M4DH7
Slmgr /ato ec67814b-30e6-4a50-bf7b-d55daf729d1e
powershell.exe -ExecutionPolicy Bypass -Command "add-appxpackage %~dp0App1_1.0.0.0_AnyCPU_Debug.appx -DependencyPath %~dp0Dependencies\Microsoft.WinJS.2.0.appx"
PAUSE;