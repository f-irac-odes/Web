<script >
    import { useThrelte, useRender } from '@threlte/core'
    import {
      EffectComposer,
      EffectPass,
      RenderPass,
      OutlineEffect,
      BlendFunction
    } from 'postprocessing'
  
    export let selectedMesh
  
    const { scene, renderer, camera, size } = useThrelte()
  
    const composer = new EffectComposer(renderer)
    
    const setupEffectComposer = (camera, selectedMesh) => {
      composer.removeAllPasses()
      composer.addPass(new RenderPass(scene, camera))
  
      const outlineEffect = new OutlineEffect(scene, camera, {
        blendFunction: BlendFunction.ALPHA,
        edgeStrength: 100,
        pulseSpeed: 0.0,
        visibleEdgeColor: 0xffffff,
        hiddenEdgeColor: 0x9900ff,
        xRay: true,
        blur: true
      })
      if (selectedMesh !== undefined) {
        outlineEffect.selection.add(selectedMesh)
      }
      composer.addPass(new EffectPass(camera, outlineEffect))
    }
  
    $: setupEffectComposer($camera, selectedMesh)
    $: composer.setSize($size.width, $size.height)
  
    useRender((_, delta) => {
      composer.render(delta)
    })
  </script>
  