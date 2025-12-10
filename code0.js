gdjs.Intro1Code = {};
gdjs.Intro1Code.localVariables = [];
gdjs.Intro1Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Intro1Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Intro1Code.GDIntro_9595BackgroundObjects3= [];
gdjs.Intro1Code.GDIntro_9595BackgroundObjects4= [];
gdjs.Intro1Code.GDIntro_9595BackgroundObjects5= [];
gdjs.Intro1Code.GDbtn_9595jogarObjects1= [];
gdjs.Intro1Code.GDbtn_9595jogarObjects2= [];
gdjs.Intro1Code.GDbtn_9595jogarObjects3= [];
gdjs.Intro1Code.GDbtn_9595jogarObjects4= [];
gdjs.Intro1Code.GDbtn_9595jogarObjects5= [];
gdjs.Intro1Code.GDpainel_959501Objects1= [];
gdjs.Intro1Code.GDpainel_959501Objects2= [];
gdjs.Intro1Code.GDpainel_959501Objects3= [];
gdjs.Intro1Code.GDpainel_959501Objects4= [];
gdjs.Intro1Code.GDpainel_959501Objects5= [];
gdjs.Intro1Code.GDPlayerObjects1= [];
gdjs.Intro1Code.GDPlayerObjects2= [];
gdjs.Intro1Code.GDPlayerObjects3= [];
gdjs.Intro1Code.GDPlayerObjects4= [];
gdjs.Intro1Code.GDPlayerObjects5= [];
gdjs.Intro1Code.GDbtn_9595comecarObjects1= [];
gdjs.Intro1Code.GDbtn_9595comecarObjects2= [];
gdjs.Intro1Code.GDbtn_9595comecarObjects3= [];
gdjs.Intro1Code.GDbtn_9595comecarObjects4= [];
gdjs.Intro1Code.GDbtn_9595comecarObjects5= [];
gdjs.Intro1Code.GDNewSpriteObjects1= [];
gdjs.Intro1Code.GDNewSpriteObjects2= [];
gdjs.Intro1Code.GDNewSpriteObjects3= [];
gdjs.Intro1Code.GDNewSpriteObjects4= [];
gdjs.Intro1Code.GDNewSpriteObjects5= [];
gdjs.Intro1Code.GDAcerto_959501Objects1= [];
gdjs.Intro1Code.GDAcerto_959501Objects2= [];
gdjs.Intro1Code.GDAcerto_959501Objects3= [];
gdjs.Intro1Code.GDAcerto_959501Objects4= [];
gdjs.Intro1Code.GDAcerto_959501Objects5= [];
gdjs.Intro1Code.GDCursorObjects1= [];
gdjs.Intro1Code.GDCursorObjects2= [];
gdjs.Intro1Code.GDCursorObjects3= [];
gdjs.Intro1Code.GDCursorObjects4= [];
gdjs.Intro1Code.GDCursorObjects5= [];
gdjs.Intro1Code.GDAcerto_959502Objects1= [];
gdjs.Intro1Code.GDAcerto_959502Objects2= [];
gdjs.Intro1Code.GDAcerto_959502Objects3= [];
gdjs.Intro1Code.GDAcerto_959502Objects4= [];
gdjs.Intro1Code.GDAcerto_959502Objects5= [];
gdjs.Intro1Code.GDAcerto_959503Objects1= [];
gdjs.Intro1Code.GDAcerto_959503Objects2= [];
gdjs.Intro1Code.GDAcerto_959503Objects3= [];
gdjs.Intro1Code.GDAcerto_959503Objects4= [];
gdjs.Intro1Code.GDAcerto_959503Objects5= [];
gdjs.Intro1Code.GDAcerto_959504Objects1= [];
gdjs.Intro1Code.GDAcerto_959504Objects2= [];
gdjs.Intro1Code.GDAcerto_959504Objects3= [];
gdjs.Intro1Code.GDAcerto_959504Objects4= [];
gdjs.Intro1Code.GDAcerto_959504Objects5= [];


gdjs.Intro1Code.asyncCallback21953964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_comecar"), gdjs.Intro1Code.GDbtn_9595comecarObjects5);

{for(var i = 0, len = gdjs.Intro1Code.GDbtn_9595comecarObjects5.length ;i < len;++i) {
    gdjs.Intro1Code.GDbtn_9595comecarObjects5[i].hide(false);
}
}gdjs.Intro1Code.localVariables.length = 0;
}
gdjs.Intro1Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro1Code.localVariables);
/* Don't save btn_comecar as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Intro1Code.asyncCallback21953964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro1Code.asyncCallback10786172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro1Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\title.mp3", 3, false, 100, 1);
}
{ //Subevents
gdjs.Intro1Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro1Code.localVariables.length = 0;
}
gdjs.Intro1Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro1Code.localVariables);
/* Don't save btn_comecar as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro1Code.asyncCallback10786172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro1Code.asyncCallback23557860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.Intro1Code.GDNewSpriteObjects3);

{for(var i = 0, len = gdjs.Intro1Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Intro1Code.GDNewSpriteObjects3[i].getBehavior("Animation").setAnimationName("play");
}
}
{ //Subevents
gdjs.Intro1Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro1Code.localVariables.length = 0;
}
gdjs.Intro1Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro1Code.localVariables);
for (const obj of gdjs.Intro1Code.GDNewSpriteObjects2) asyncObjectsList.addObject("NewSprite", obj);
/* Don't save btn_comecar as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro1Code.asyncCallback23557860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro1Code.asyncCallback21953084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Intro1Code.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.Intro1Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Intro1Code.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectPositionTween2("mapa", 270, 40, "bouncePast", 1, false);
}
}
{ //Subevents
gdjs.Intro1Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro1Code.localVariables.length = 0;
}
gdjs.Intro1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro1Code.localVariables);
for (const obj of gdjs.Intro1Code.GDbtn_9595comecarObjects1) asyncObjectsList.addObject("btn_comecar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro1Code.asyncCallback21953084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro1Code.asyncCallback21954492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro2", false);
}gdjs.Intro1Code.localVariables.length = 0;
}
gdjs.Intro1Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro1Code.asyncCallback21954492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro1Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro1Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro1Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro1Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro1Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro1Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro1Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro1Code.GDCursorObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro1Code.GDbtn_9595comecarObjects1);
{for(var i = 0, len = gdjs.Intro1Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Intro1Code.GDbtn_9595comecarObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 80, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}
{ //Subevents
gdjs.Intro1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro1Code.GDbtn_9595comecarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro1Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro1Code.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro1Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro1Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro1Code.GDbtn_9595comecarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}
{ //Subevents
gdjs.Intro1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "intro") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Intro1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Intro1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Intro1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
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

gdjs.Intro1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro1Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects4.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects5.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects4.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects5.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects4.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects5.length = 0;
gdjs.Intro1Code.GDPlayerObjects1.length = 0;
gdjs.Intro1Code.GDPlayerObjects2.length = 0;
gdjs.Intro1Code.GDPlayerObjects3.length = 0;
gdjs.Intro1Code.GDPlayerObjects4.length = 0;
gdjs.Intro1Code.GDPlayerObjects5.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects4.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects5.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects3.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects4.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects5.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects5.length = 0;
gdjs.Intro1Code.GDCursorObjects1.length = 0;
gdjs.Intro1Code.GDCursorObjects2.length = 0;
gdjs.Intro1Code.GDCursorObjects3.length = 0;
gdjs.Intro1Code.GDCursorObjects4.length = 0;
gdjs.Intro1Code.GDCursorObjects5.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects5.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects5.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects5.length = 0;

gdjs.Intro1Code.eventsList5(runtimeScene);
gdjs.Intro1Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects4.length = 0;
gdjs.Intro1Code.GDIntro_9595BackgroundObjects5.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects4.length = 0;
gdjs.Intro1Code.GDbtn_9595jogarObjects5.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects4.length = 0;
gdjs.Intro1Code.GDpainel_959501Objects5.length = 0;
gdjs.Intro1Code.GDPlayerObjects1.length = 0;
gdjs.Intro1Code.GDPlayerObjects2.length = 0;
gdjs.Intro1Code.GDPlayerObjects3.length = 0;
gdjs.Intro1Code.GDPlayerObjects4.length = 0;
gdjs.Intro1Code.GDPlayerObjects5.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects4.length = 0;
gdjs.Intro1Code.GDbtn_9595comecarObjects5.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects3.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects4.length = 0;
gdjs.Intro1Code.GDNewSpriteObjects5.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959501Objects5.length = 0;
gdjs.Intro1Code.GDCursorObjects1.length = 0;
gdjs.Intro1Code.GDCursorObjects2.length = 0;
gdjs.Intro1Code.GDCursorObjects3.length = 0;
gdjs.Intro1Code.GDCursorObjects4.length = 0;
gdjs.Intro1Code.GDCursorObjects5.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959502Objects5.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959503Objects5.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects1.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects2.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects3.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects4.length = 0;
gdjs.Intro1Code.GDAcerto_959504Objects5.length = 0;


return;

}

gdjs['Intro1Code'] = gdjs.Intro1Code;
