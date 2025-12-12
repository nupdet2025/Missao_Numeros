gdjs.Intro2Code = {};
gdjs.Intro2Code.localVariables = [];
gdjs.Intro2Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Intro2Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Intro2Code.GDbtn_9595jogarObjects1= [];
gdjs.Intro2Code.GDbtn_9595jogarObjects2= [];
gdjs.Intro2Code.GDpainel_959501Objects1= [];
gdjs.Intro2Code.GDpainel_959501Objects2= [];
gdjs.Intro2Code.GDPlayerObjects1= [];
gdjs.Intro2Code.GDPlayerObjects2= [];
gdjs.Intro2Code.GDbtn_9595comecarObjects1= [];
gdjs.Intro2Code.GDbtn_9595comecarObjects2= [];
gdjs.Intro2Code.GDNewSpriteObjects1= [];
gdjs.Intro2Code.GDNewSpriteObjects2= [];
gdjs.Intro2Code.GDAcerto_959501Objects1= [];
gdjs.Intro2Code.GDAcerto_959501Objects2= [];
gdjs.Intro2Code.GDCursorObjects1= [];
gdjs.Intro2Code.GDCursorObjects2= [];
gdjs.Intro2Code.GDAcerto_959502Objects1= [];
gdjs.Intro2Code.GDAcerto_959502Objects2= [];
gdjs.Intro2Code.GDAcerto_959503Objects1= [];
gdjs.Intro2Code.GDAcerto_959503Objects2= [];
gdjs.Intro2Code.GDAcerto_959504Objects1= [];
gdjs.Intro2Code.GDAcerto_959504Objects2= [];


gdjs.Intro2Code.asyncCallback20810660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Intro2Code.localVariables.length = 0;
}
gdjs.Intro2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro2Code.asyncCallback20810660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro2Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro2Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro2Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\audio_intro.mp3", 2, false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 40, 0.5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro2Code.GDbtn_9595comecarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro2Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro2Code.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro2Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro2Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro2Code.GDbtn_9595comecarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Intro2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "intro") >= 13.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Intro2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "intro");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Intro2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro2Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro2Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro2Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro2Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro2Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro2Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro2Code.GDPlayerObjects1.length = 0;
gdjs.Intro2Code.GDPlayerObjects2.length = 0;
gdjs.Intro2Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro2Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro2Code.GDAcerto_959501Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959501Objects2.length = 0;
gdjs.Intro2Code.GDCursorObjects1.length = 0;
gdjs.Intro2Code.GDCursorObjects2.length = 0;
gdjs.Intro2Code.GDAcerto_959502Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959502Objects2.length = 0;
gdjs.Intro2Code.GDAcerto_959503Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959503Objects2.length = 0;
gdjs.Intro2Code.GDAcerto_959504Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959504Objects2.length = 0;

gdjs.Intro2Code.eventsList1(runtimeScene);
gdjs.Intro2Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro2Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro2Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro2Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro2Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro2Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro2Code.GDPlayerObjects1.length = 0;
gdjs.Intro2Code.GDPlayerObjects2.length = 0;
gdjs.Intro2Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro2Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro2Code.GDAcerto_959501Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959501Objects2.length = 0;
gdjs.Intro2Code.GDCursorObjects1.length = 0;
gdjs.Intro2Code.GDCursorObjects2.length = 0;
gdjs.Intro2Code.GDAcerto_959502Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959502Objects2.length = 0;
gdjs.Intro2Code.GDAcerto_959503Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959503Objects2.length = 0;
gdjs.Intro2Code.GDAcerto_959504Objects1.length = 0;
gdjs.Intro2Code.GDAcerto_959504Objects2.length = 0;


return;

}

gdjs['Intro2Code'] = gdjs.Intro2Code;
