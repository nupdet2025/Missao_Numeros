gdjs.Cena_9505Code = {};
gdjs.Cena_9505Code.localVariables = [];
gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595jogarObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595jogarObjects2= [];
gdjs.Cena_9505Code.GDpainel_959501Objects1= [];
gdjs.Cena_9505Code.GDpainel_959501Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2= [];
gdjs.Cena_9505Code.GDPlayerObjects1= [];
gdjs.Cena_9505Code.GDPlayerObjects2= [];
gdjs.Cena_9505Code.GDpannelObjects1= [];
gdjs.Cena_9505Code.GDpannelObjects2= [];
gdjs.Cena_9505Code.GDMapaObjects1= [];
gdjs.Cena_9505Code.GDMapaObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595certoObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595certoObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2= [];
gdjs.Cena_9505Code.GDtext_9595boxObjects1= [];
gdjs.Cena_9505Code.GDtext_9595boxObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595audioObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595audioObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595nextObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595nextObjects2= [];
gdjs.Cena_9505Code.GDAcerto_959501Objects1= [];
gdjs.Cena_9505Code.GDAcerto_959501Objects2= [];
gdjs.Cena_9505Code.GDCursorObjects1= [];
gdjs.Cena_9505Code.GDCursorObjects2= [];
gdjs.Cena_9505Code.GDAcerto_959502Objects1= [];
gdjs.Cena_9505Code.GDAcerto_959502Objects2= [];
gdjs.Cena_9505Code.GDAcerto_959503Objects1= [];
gdjs.Cena_9505Code.GDAcerto_959503Objects2= [];
gdjs.Cena_9505Code.GDAcerto_959504Objects1= [];
gdjs.Cena_9505Code.GDAcerto_959504Objects2= [];


gdjs.Cena_9505Code.asyncCallback21661388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("text_box"), gdjs.Cena_9505Code.GDtext_9595boxObjects2);

{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\audio_01.mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDtext_9595boxObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDtext_9595boxObjects2[i].activateBehavior("AutoTyping", true);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595audioObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595audioObjects2[i].hide(false);
}
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595audioObjects1) asyncObjectsList.addObject("btn_audio", obj);
for (const obj of gdjs.Cena_9505Code.GDtext_9595boxObjects1) asyncObjectsList.addObject("text_box", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21661388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback21664708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa_05", false);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21664708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback21673572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\miss.mp3", 3, false, 100, 1);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21673572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback21676540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\miss.mp3", 3, false, 100, 1);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21676540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback21679012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\miss.mp3", 3, false, 100, 1);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1) asyncObjectsList.addObject("btn_errado_03", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21679012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback21681556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\miss.mp3", 3, false, 100, 1);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1) asyncObjectsList.addObject("btn_errado_04", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback21681556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9505Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9505Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("pannel"), gdjs.Cena_9505Code.GDpannelObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_box"), gdjs.Cena_9505Code.GDtext_9595boxObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}{for(var i = 0, len = gdjs.Cena_9505Code.GDtext_9595boxObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDtext_9595boxObjects1[i].activateBehavior("AutoTyping", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDpannelObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDpannelObjects1[i].getBehavior("Resizable").setSize(0, 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio_box_open.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDpannelObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDpannelObjects1[i].getBehavior("Tween").addObjectWidthTween2("caixa_horizontal", 790, "easeTo", 0.5, false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDpannelObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDpannelObjects1[i].getBehavior("Tween").addObjectHeightTween2("caixa_vertical", 246, "easeTo", 0.5, false);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.Cena_9505Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\audio_01.mp3", 3, false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariableString(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "miss" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPlayerObjects1[k] = gdjs.Cena_9505Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21667140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("miss");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].resetTimer("miss");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariableString(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "hit" ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPlayerObjects1[k] = gdjs.Cena_9505Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21668236);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].removeTimer("miss");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("hit");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].resetTimer("hit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("miss") >= 0.9 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPlayerObjects1[k] = gdjs.Cena_9505Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("idle");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].removeTimer("miss");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("hit") >= 1.2 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPlayerObjects1[k] = gdjs.Cena_9505Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("hit");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].removeTimer("hit");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDMapaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDMapaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDMapaObjects1[k] = gdjs.Cena_9505Code.GDMapaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDMapaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("miss");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDMapaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDMapaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDMapaObjects1[k] = gdjs.Cena_9505Code.GDMapaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDMapaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("miss");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDMapaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDMapaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDMapaObjects1[k] = gdjs.Cena_9505Code.GDMapaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDMapaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("miss");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDMapaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDMapaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDMapaObjects1[k] = gdjs.Cena_9505Code.GDMapaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDMapaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("miss");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDMapaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDMapaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDMapaObjects1[k] = gdjs.Cena_9505Code.GDMapaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDMapaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595audioObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Cena_9505Code.GDPlayerObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595certoObjects1 */
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1 */
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1 */
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1 */
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text_box"), gdjs.Cena_9505Code.GDtext_9595boxObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].resetTimer("acerto");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPlayerObjects1[i].returnVariable(gdjs.Cena_9505Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("hit");
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].returnVariable(gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 40, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDtext_9595boxObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDtext_9595boxObjects1[i].getBehavior("Text").setText("Boa observação!");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\fase_05\\hit.mp3", 3, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getTimerElapsedTimeInSecondsOrNaN("acerto") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Cena_9505Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_audio"), gdjs.Cena_9505Code.GDbtn_9595audioObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595certoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_03"), gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_04"), gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDMapaObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDMapaObjects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595audioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_9505Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9505Code.GDPlayerObjects1.length = 0;
gdjs.Cena_9505Code.GDPlayerObjects2.length = 0;
gdjs.Cena_9505Code.GDpannelObjects1.length = 0;
gdjs.Cena_9505Code.GDpannelObjects2.length = 0;
gdjs.Cena_9505Code.GDMapaObjects1.length = 0;
gdjs.Cena_9505Code.GDMapaObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2.length = 0;
gdjs.Cena_9505Code.GDtext_9595boxObjects1.length = 0;
gdjs.Cena_9505Code.GDtext_9595boxObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595audioObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDCursorObjects1.length = 0;
gdjs.Cena_9505Code.GDCursorObjects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959504Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959504Objects2.length = 0;

gdjs.Cena_9505Code.eventsList6(runtimeScene);
gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Cena_9505Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9505Code.GDPlayerObjects1.length = 0;
gdjs.Cena_9505Code.GDPlayerObjects2.length = 0;
gdjs.Cena_9505Code.GDpannelObjects1.length = 0;
gdjs.Cena_9505Code.GDpannelObjects2.length = 0;
gdjs.Cena_9505Code.GDMapaObjects1.length = 0;
gdjs.Cena_9505Code.GDMapaObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959504Objects2.length = 0;
gdjs.Cena_9505Code.GDtext_9595boxObjects1.length = 0;
gdjs.Cena_9505Code.GDtext_9595boxObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595audioObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595audioObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDCursorObjects1.length = 0;
gdjs.Cena_9505Code.GDCursorObjects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDAcerto_959504Objects1.length = 0;
gdjs.Cena_9505Code.GDAcerto_959504Objects2.length = 0;


return;

}

gdjs['Cena_9505Code'] = gdjs.Cena_9505Code;
