gdjs.Mapa_9507Code = {};
gdjs.Mapa_9507Code.localVariables = [];
gdjs.Mapa_9507Code.GDbackgroundObjects1= [];
gdjs.Mapa_9507Code.GDbackgroundObjects2= [];
gdjs.Mapa_9507Code.GDbackgroundObjects3= [];
gdjs.Mapa_9507Code.GDbtn_9595nextObjects1= [];
gdjs.Mapa_9507Code.GDbtn_9595nextObjects2= [];
gdjs.Mapa_9507Code.GDbtn_9595nextObjects3= [];
gdjs.Mapa_9507Code.GDNewSpriteObjects1= [];
gdjs.Mapa_9507Code.GDNewSpriteObjects2= [];
gdjs.Mapa_9507Code.GDNewSpriteObjects3= [];
gdjs.Mapa_9507Code.GDPlayerObjects1= [];
gdjs.Mapa_9507Code.GDPlayerObjects2= [];
gdjs.Mapa_9507Code.GDPlayerObjects3= [];
gdjs.Mapa_9507Code.GDspotObjects1= [];
gdjs.Mapa_9507Code.GDspotObjects2= [];
gdjs.Mapa_9507Code.GDspotObjects3= [];
gdjs.Mapa_9507Code.GDAcerto_959501Objects1= [];
gdjs.Mapa_9507Code.GDAcerto_959501Objects2= [];
gdjs.Mapa_9507Code.GDAcerto_959501Objects3= [];
gdjs.Mapa_9507Code.GDCursorObjects1= [];
gdjs.Mapa_9507Code.GDCursorObjects2= [];
gdjs.Mapa_9507Code.GDCursorObjects3= [];
gdjs.Mapa_9507Code.GDAcerto_959502Objects1= [];
gdjs.Mapa_9507Code.GDAcerto_959502Objects2= [];
gdjs.Mapa_9507Code.GDAcerto_959502Objects3= [];
gdjs.Mapa_9507Code.GDAcerto_959503Objects1= [];
gdjs.Mapa_9507Code.GDAcerto_959503Objects2= [];
gdjs.Mapa_9507Code.GDAcerto_959503Objects3= [];
gdjs.Mapa_9507Code.GDAcerto_959504Objects1= [];
gdjs.Mapa_9507Code.GDAcerto_959504Objects2= [];
gdjs.Mapa_9507Code.GDAcerto_959504Objects3= [];


gdjs.Mapa_9507Code.asyncCallback22316788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sucess.mp3", 3, false, 100, 1);
}gdjs.Mapa_9507Code.localVariables.length = 0;
}
gdjs.Mapa_9507Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Mapa_9507Code.asyncCallback22316788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mapa_9507Code.asyncCallback22315980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Mapa_9507Code.GDPlayerObjects2);

gdjs.copyArray(runtimeScene.getObjects("spot"), gdjs.Mapa_9507Code.GDspotObjects2);
{for(var i = 0, len = gdjs.Mapa_9507Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Mapa_9507Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween2("caminhar", (( gdjs.Mapa_9507Code.GDspotObjects2.length === 0 ) ? 0 :gdjs.Mapa_9507Code.GDspotObjects2[0].getPointX("")), (( gdjs.Mapa_9507Code.GDspotObjects2.length === 0 ) ? 0 :gdjs.Mapa_9507Code.GDspotObjects2[0].getPointY("")), "linear", 3, false);
}
}
{ //Subevents
gdjs.Mapa_9507Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Mapa_9507Code.localVariables.length = 0;
}
gdjs.Mapa_9507Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
for (const obj of gdjs.Mapa_9507Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Mapa_9507Code.asyncCallback22315980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mapa_9507Code.asyncCallback22317692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}gdjs.Mapa_9507Code.localVariables.length = 0;
}
gdjs.Mapa_9507Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Mapa_9507Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Mapa_9507Code.asyncCallback22317692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Mapa_9507Code.mapOfGDgdjs_9546Mapa_95959507Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Mapa_9507Code.GDPlayerObjects1});
gdjs.Mapa_9507Code.mapOfGDgdjs_9546Mapa_95959507Code_9546GDspotObjects1Objects = Hashtable.newFrom({"spot": gdjs.Mapa_9507Code.GDspotObjects1});
gdjs.Mapa_9507Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Mapa_9507Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Mapa_9507Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Mapa_9507Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Mapa_9507Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Mapa_9507Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Mapa_9507Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Mapa_9507Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("stop");
}
}
{ //Subevents
gdjs.Mapa_9507Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Mapa_9507Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Mapa_9507Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Mapa_9507Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Mapa_9507Code.GDbtn_9595nextObjects1[k] = gdjs.Mapa_9507Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Mapa_9507Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}
{ //Subevents
gdjs.Mapa_9507Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Mapa_9507Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spot"), gdjs.Mapa_9507Code.GDspotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Mapa_9507Code.mapOfGDgdjs_9546Mapa_95959507Code_9546GDPlayerObjects1Objects, gdjs.Mapa_9507Code.mapOfGDgdjs_9546Mapa_95959507Code_9546GDspotObjects1Objects, 2, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Mapa_9507Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Mapa_9507Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Mapa_9507Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("stop");
}
}}

}


};

gdjs.Mapa_9507Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mapa_9507Code.GDbackgroundObjects1.length = 0;
gdjs.Mapa_9507Code.GDbackgroundObjects2.length = 0;
gdjs.Mapa_9507Code.GDbackgroundObjects3.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects1.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects2.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects3.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects1.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects2.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects3.length = 0;
gdjs.Mapa_9507Code.GDspotObjects1.length = 0;
gdjs.Mapa_9507Code.GDspotObjects2.length = 0;
gdjs.Mapa_9507Code.GDspotObjects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects3.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects1.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects2.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects3.length = 0;

gdjs.Mapa_9507Code.eventsList3(runtimeScene);
gdjs.Mapa_9507Code.GDbackgroundObjects1.length = 0;
gdjs.Mapa_9507Code.GDbackgroundObjects2.length = 0;
gdjs.Mapa_9507Code.GDbackgroundObjects3.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Mapa_9507Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects1.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects2.length = 0;
gdjs.Mapa_9507Code.GDNewSpriteObjects3.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects1.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects2.length = 0;
gdjs.Mapa_9507Code.GDPlayerObjects3.length = 0;
gdjs.Mapa_9507Code.GDspotObjects1.length = 0;
gdjs.Mapa_9507Code.GDspotObjects2.length = 0;
gdjs.Mapa_9507Code.GDspotObjects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959501Objects3.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects1.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects2.length = 0;
gdjs.Mapa_9507Code.GDCursorObjects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959502Objects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959503Objects3.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects1.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects2.length = 0;
gdjs.Mapa_9507Code.GDAcerto_959504Objects3.length = 0;


return;

}

gdjs['Mapa_9507Code'] = gdjs.Mapa_9507Code;
