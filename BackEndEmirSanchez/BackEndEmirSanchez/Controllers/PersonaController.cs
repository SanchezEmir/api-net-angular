using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;
using BackEndEmirSanchez.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace BackEndEmirSanchez.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {

        private readonly EmpleadosContext _baseDatos;

        public PersonaController(EmpleadosContext baseDatos)
        {
            _baseDatos = baseDatos;
        }

        [HttpGet]
        [Route("Consultar")]
        public async Task<IActionResult> Consultar()
        {
            Thread.Sleep(1000);
            var consultaPersonas = await _baseDatos.Personas.ToListAsync();
            return Ok(consultaPersonas);
        }

        [HttpPost]
        [Route("Insertar")]
        public async Task<IActionResult> Insertar([FromBody] Persona persona)
        {

            try
            {
                await _baseDatos.Personas.AddAsync(persona);
                await _baseDatos.SaveChangesAsync();
                return Ok(persona);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Detalle(int id)
        {
            try
            {
                var persona = await _baseDatos.Personas.FindAsync(id);

                if(persona == null)
                {
                    return NotFound();
                }
                return Ok(persona);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            try
            {

                var persona = await _baseDatos.Personas.FindAsync(id);

                if(persona == null)
                {
                    return NotFound();
                }

                _baseDatos.Personas.Remove(persona);
                await _baseDatos.SaveChangesAsync();

                return NoContent();
            } 
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
